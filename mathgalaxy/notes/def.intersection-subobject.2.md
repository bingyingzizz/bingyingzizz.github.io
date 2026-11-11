# 子对象的交　`def.intersection-subobject`　·　说明
根 `../`

**与集合交的关系**：在 $\mathbf{Set}$ 中 $Y \times_{X} Z = \{(y,z) : y = z\}$，映射 $t \mapsto (t,t)$ 给出 $Y \cap Z \to Y \times_{X} Z$ 的同构；所以交就是集合交。在 $\mathbf{Grp}$、$\mathbf{Top}$ 等具体范畴中，子对象由单射决定，交的底层集合同样是集合交。

**与并的关系**：并是余积的像 $Y \cup Z := \operatorname{im}(Y \coprod Z \to X)$，不是纤维余积。预拓扑斯里子对象构成有界格：交 = 纤维积（最大下界），并 = 像（最小上界），见 `prop.subobject-lattice`。

**警告**：一般范畴里 $Y \cap Z$ 不一定存在；即使存在，也不要把它与积 $Y \times Z$ 或余积 $Y \coprod Z$ 混为一谈。交是「沿 $X$ 的纤维积」，而不是「两个对象的积」。
