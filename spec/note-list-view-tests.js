(function () {
  var note1 = {
    text: function () {
      return 'Favourite drink: seltzer';
    }
  }
  var note2 = {
    text: function () {
      return 'Favourite food: pizza. I love it soooooo much!';
    }
  }

  var array = [note1, note2]

  var myNoteList = {
    all: function () {
      return array
    }
  }

  var myNoteListView = new NoteListView(myNoteList);


  function testInitializesWithNoteList() {
    console.log(myNoteListView.list)
    console.log(myNoteList.all())
    assert.isTrue(myNoteListView.list == myNoteList.all());
  };

  function testReturnsHTMLList() {
    console.log(myNoteListView.returnHTML())
    assert.isTrue(myNoteListView.returnHTML() === "<ul><li><a href='#notes/0'>Favourite drink: sel</a></li><li><a href='#notes/1'>Favourite food: pizz</a></li></ul>")
  };



  testInitializesWithNoteList();
  testReturnsHTMLList();

})();