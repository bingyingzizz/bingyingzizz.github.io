# 流形上的换元公式给出 $|\det A|$ 的体积含义
`imp.derived-det-volume` · 推出 · strong 边 · 根 `../`

`thm.change-of-variables-manifold` 流形上的换元公式 → `def.determinant` 行列式

**第二步：套换元公式。** $A$ 保向时 $\int_{A(U)}\omega = \int_{U} A^{\ast}\omega = \det(A)\int_{U}\omega$；反向时按公式多一个负号。两种情形合起来是 $\int_{A(U)}\omega = |\det A|\int_{U}\omega$，而左边就是 $A(U)$ 的体积：

$$\operatorname{vol}\bigl(A(U)\bigr) = |\det A| \cdot \operatorname{vol}(U).$$

取 $U$ 是单位立方体，即得「$\det$ 的绝对值是把单位立方体拉成的平行体的体积」，符号则记录 $A$ 是否保向。$\blacksquare$

> 这条把「行列式的几何读法」从直接的体积公理换成了积分：$|\det|$ 之所以是体积缩放因子，是因为 $n$-形式是唯一能自然积分的东西。
