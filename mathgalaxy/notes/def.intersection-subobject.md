# 子对象的交　`def.intersection-subobject`　·　说明
根 `../`

**为什么用纤维积**：交要表达「同时落在 $Y$ 与 $Z$ 里」。用元素说，就是 $t \in Y \cap Z$；不用元素说，就是 $T \to X$ 同时分解过 $Y \rightarrowtail X$ 与 $Z \rightarrowtail X$。纤维积的泛性正是这个「同时分解」的万有解；于是任何满足该性质的对象都唯一地分解过 $Y \times_{X} Z$，即它是最大下界。

**存在性**：交就是纤维积，所以「交存在」当且仅当沿 $X$ 的纤维积存在；没有纤维积的范畴里不能谈交。单态射沿任意态射的拉回仍是单态射（见 `def.mono`），所以 $Y \times_{X} Z \to X$ 确实是子对象。

**与集合交的关系**：在 $\mathbf{Set}$ 中 $Y \times_{X} Z = \{(y,z) : y = z\}$，映射 $t \mapsto (t,t)$ 给出 $Y \cap Z \to Y \times_{X} Z$ 的同构；所以交就是集合交。在 $\mathbf{Grp}$、$\mathbf{Top}$ 等具体范畴中，子对象由单射决定，交的底层集合同样是集合交。

> 续见 notes/def.intersection-subobject.2.md
