# 幂对象　`def.power-object`　·　说明
根 `../`

**等价说法（更好用）**：$Y^{X}$ 就是函子 $-\times X : \mathcal{C} \to \mathcal{C}$ 的**右伴随**，即



$$\operatorname{Hom}(Z \times X,\, Y) \;\cong\; \operatorname{Hom}(Z,\, Y^{X}).$$

所以「有幂对象」= 「积有右伴随」。

⭐ **为什么它是「笛卡尔闭」的第二半**：笛卡尔闭 = 有限积 + 幂对象。本图 `prop.cg-cartesian-closed` 说的正是「紧生成空间这一侧有幂对象，只是要把紧开拓扑再 $k$-化一次」。

⚠ **别与「内部 Hom」混**：$\mathcal{C}$ 是一般范畴时，$Y^{X}$ 是 $\mathcal{C}$ 里**真的存在**的那个对象；而内部 Hom（`def.internal-hom`，拓扑斯里那个）是先取 Hom 集再用余极限/层化造出来的。在笛卡尔闭范畴里两者一致，在一般的拓扑斯里只有内部 Hom。

📌 **$\mathbf{Set}$ 里的样子**：$Y^{X}$ 就是函数集 $\operatorname{Hom}_{\mathbf{Set}}(X,Y)$，$\operatorname{ev}(f, x) = f(x)$ —— 幂对象就是「把函数收集成一个集合」这件事的对象化。
