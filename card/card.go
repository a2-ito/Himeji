package card

import (
	"math/rand"
)

type Item struct {
    Number int    `json:"Number"`
    Mark   string `json:"Mark"`
}

type Cards struct {
    Items []Item
}

func New() *Cards {
    return &Cards{}
}

func (r *Cards) Init() {
	//r.Items = append(r.Items, Item{Mark: "hoge", Number: "10"})
  r.Items = []Item {
    Item{10, "club"},
    Item{10, "spade"},
    Item{10, "heart"},
    Item{10, "diamond"},
    Item{11, "club"},
    Item{11, "spade"},
    Item{11, "heart"},
    Item{11, "diamond"},
    Item{12, "club"},
    Item{12, "spade"},
    Item{12, "heart"},
    Item{12, "diamond"},
    Item{13, "club"},
    Item{13, "spade"},
    Item{13, "heart"},
    Item{13, "diamond"}}

}

func (r *Cards) Add(item Item) {
    r.Items = append(r.Items, item)
}

func (r *Cards) GetAll() []Item {
    return r.Items
}

func (r *Cards) Shuffle() bool {
  n := len(r.Items)
  for i:=n-1; i>=0; i-- {
    j := rand.Intn(i + 1)
    r.Items[i], r.Items[j] = r.Items[j], r.Items[i]
  }
	return true
}

func (r *Cards) GetCard(index int) Item {
  return r.Items[index]
}

