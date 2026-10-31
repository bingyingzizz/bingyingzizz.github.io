# 关联层　`def.associated-sheaf`　·　说明
根 `../`

**这个同构怎么来的。** 层化 $(-)^{\#}$ 与含入 $\widehat{\mathcal{C}}^{\#} \hookrightarrow \widehat{\mathcal{C}}$ 互为伴随，所以

$$\operatorname{Hom}\bigl(h_{X}^{\#},\ F\bigr) \cong \operatorname{Hom}(h_{X}, F) \cong F(X),$$

最后一步是米田引理 ✓。

⭐ **用处**：它给出「把 $\mathcal{C}$ 的对象当成层看」的规范做法 $X \mapsto X^{\sharp}$。当拓扑**次标准**时 $h_{X}$ 本来就是层，于是 $X^{\sharp} = h_{X}$，米田嵌入直接经过层范畴 ✓（这也是「次标准」最常用的等价说法）。

⚠️ 这个函子**左正合**（米田嵌入保极限、层化也左正合），但一般**不忠实**，也不保余极限与无穷极限：层化会把「同一个对象的不同预层描述」粘起来。
