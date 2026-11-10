# 子对象的交　`def.intersection-subobject`　·　说明
根 `../`

**与并的关系**：并是余积的像 $Y \cup Z := \operatorname{im}(Y \coprod Z \to X)$，不是纤维余积。预拓扑斯里子对象构成有界格：交 = 纤维积（最大下界），并 = 像（最小上界），见 `prop.subobject-lattice`。

**原像**：对 $f : X' \to X$，$f^{-1}(Y) = Y \times_{X} X'$ 是 $X'$ 的子对象；它满足「$f(x) \in Y$」的泛性质，并随 $f$ 与拉回函子相容。原像与交是同一个构造（都取纤维积），只是沿的态射不同。

**警告**：一般范畴里 $Y \cap Z$ 不一定存在；即使存在，也不要把它与积 $Y \times Z$ 或余积 $Y \coprod Z$ 混为一谈。交是「沿 $X$ 的纤维积」，而不是「两个对象的积」。
