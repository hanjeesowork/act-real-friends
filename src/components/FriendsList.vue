<template>
  <main>
    <header>
      {{name}}
    </header>
    <div v-show="!approved&&comment">{{this.comment}}</div>
    <section>
      <header id="notice"></header>
      <name-card v-for="(user, index) in list" :key='index' :user="user" :approved="approved">
        <label v-show="!approved" style="line-height: 10px; color: red; margin-left: 20px;" @click="killMe(index)">삭제</label>
      </name-card>
      <img v-show="!approved" @click="addPerson" src="@/assets/add-person.png"/>
    </section>
    <footer>
      <button v-show="!approved" class="saveButton" @click="saveFriendsList">
        저장
      </button>
    </footer>
  </main>
</template>

<script>
  import nameCard from '@/components/NameCard.vue'
  import firebase from 'firebase'

  export default {
    name: "name-list",
    components: {nameCard},

    data: function () {
      return {
        uid: '',
        name: '',
        list: [],
        approved: true,
        comment: ''
      }
    },

    methods: {
      readData() {
        const _this = this

        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            _this.uid = user.uid
            var userData = firebase.database().ref(_this.uid);

            userData.on('value', function (snapshot) {
              _this.name = snapshot.val().name
              _this.list = Object.values(snapshot.val().friends ? snapshot.val().friends : {})
              _this.approved = snapshot.val().approved

              if(_this.list.length < 5) {
                while(_this.list.length < 5) {
                  _this.list.push({name: '', department: ''})
                }
              }

              if(_this.approved) {
                document.getElementById('notice').innerText = '아래의 목록으로 평가가 진행됩니다.'
              } else {
                document.getElementById('notice').innerText = '최소 5명의 평가자를 입력해 주세요.'
                _this.comment = snapshot.val().comment
              }
            });
          } else {
            console.log("login error")
          }
        })
      },


      addPerson() {
        this.list.push({name: '', department: ''})
      },


      saveFriendsList() {
        const _this = this
        const nonEmptyList = this.list.filter((person) => {return person.name})
        var updates = {}
        updates['/friends'] = nonEmptyList

        firebase.database().ref(this.uid).update(updates).then(function() {
          _this.readData()

          _this.$toasted.show('저장했따따따따');
        })
      },

      killMe(selectedIndex) {
        this.list = this.list.filter((value, index) => index !== selectedIndex)
      }
    },

    beforeMount() {
      this.readData()
    }

  }
</script>

<style scoped>

  main {
    background: url("../assets/namelist-background.png");
    background-size: contain;
    min-height: calc(100vh - 10px);
    padding-bottom: 10px;
  }

  main > header {
    width: 229.6px;
    height: 32px;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.14;
    color: rgba(0, 0, 0, 0.8);
    padding-top: 40px;
    padding-left: 20px;
    padding-bottom: 10px;
  }

  section {
    background: #ffffff;
    width: 340px;
    height: calc(100% - 159px);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin: auto;
    overflow-y: scroll;
  }

  section > header {
    font-size: 14px;
    line-height: 50px;
    color: #3d3d3d;
    border-bottom: 1px solid #e8e8ec;
    padding-left: 17px;
  }

  div {
    background: white;
    width: 320px;
    margin: auto;
    border-radius: 4px;
    margin-bottom: 5px;
    padding : 10px;
    border : 1px solid lightgray;

  }
  footer {
    background: #ffffff;
    width: 340px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin: auto;
    min-height: 66px;
  }

  .saveButton {
    width: 80px;
    height: 32px;
    border-radius: 20px;
    background-color: #4a4bd9;
    font-size: 16px;
    line-height: 32px;
    color: #ffffff;
    border: 0;
    margin-top: 16px;
    margin-left: 240px;
    margin-bottom: 18px;
  }

  img {
    padding-left: 20px;
    margin-top: 14px;
  }

</style>
