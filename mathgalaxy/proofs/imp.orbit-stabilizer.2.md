# 构造双射 $G/G_x \to Gx$ $\implies$ 轨道–稳定子
`imp.orbit-stabilizer` · 推出 · strong 边 · 根 `../`

`def.group-action` 群作用 + `thm.lagrange` Lagrange 定理 → `thm.orbit-stabilizer` 轨道–稳定子定理

**第三步：$\varphi$ 是双射。** 满：$Gx$ 的元素按定义就是 $g\cdot x$。单：若 $g\cdot x = g'\cdot x$，则 $(g^{-1}g')\cdot x = g^{-1}\cdot(g'\cdot x) = g^{-1}\cdot(g\cdot x) = x$，故 $g^{-1}g' \in G_x$，即 $g' \in gG_x$，两个陪集相同。

**第四步：取基数。** 由第三步与 Lagrange（`thm.lagrange`），

$$|\operatorname{Orb}(x)| = |G/G_x| = [G : G_x] = \frac{|G|}{|G_x|}$$

∎

> ⭐ 这个双射值得单独记住：**「轨道里的点」与「稳定子的陪集」是一回事**。它把几何（点集）翻译成了代数（陪集），后面所有轨道计数都是这一句的算术化。
