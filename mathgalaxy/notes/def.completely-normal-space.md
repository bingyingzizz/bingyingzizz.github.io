# 完全正规空间　`def.completely-normal-space`　·　说明
根 `../`

⭐ **「分离集」为什么是自然的加强**：两个闭集天然是分离的（$\overline{A} = A$，$A \cap B = \emptyset$ $\implies$ $A \cap \overline{B} \subseteq A \cap B = \emptyset$）。

所以分离集比闭集对**宽**，要求能分开更宽的一类集合，等价于要求更强的空间。

这条判据把「遗传」这个绕口的定义换成了可操作的集合条件。

⚠️ **正规不遗传，是 $T_{5}$ 存在的唯一理由**：经典例子是 Tychonoff plank，或 Sorgenfrey 平面的变体 —— 正规空间的子空间可能不正规。所以 $T_{5}$ 不是「把 $T_{4}$ 换个写法」，而是真的加了一条。

⚠️ **度量化空间都是 $T_{5}$**：距离空间的所有子空间都是距离空间、都正规。这也是为什么在分析里很少需要 $T_{5}$ —— 它自动成立（更强的是 $T_{6}$，见 `def.perfectly-normal-space`）。
