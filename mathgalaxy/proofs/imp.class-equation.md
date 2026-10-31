# 共轭作用的轨道分解 + 轨道–稳定子 $\implies$ 类方程
`imp.class-equation` · 推出 · strong 边 · 根 `../`

`def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 → `thm.class-equation` 类方程

**第一步：共轭是一个作用。** 令 $g \cdot x := g x g^{-1}$。则 $e\cdot x = x$，且

$$(gh)\cdot x = (gh)\,x\,(gh)^{-1} = g\,(h x h^{-1})\,g^{-1} = g \cdot (h \cdot x).$$

**第二步：轨道与稳定子各是什么。** 轨道 $G\cdot x = \{\,gxg^{-1}\,\}$ 就是**共轭类**；稳定子

$$G_x = \{\, g : gxg^{-1} = x \,\} = \{\, g : gx = xg \,\} = C_G(x)$$

正是**中心化子**。而 $|\text{轨道}| = 1 \iff Gx = \{x\} \iff x \in Z(G)$（与一切元素交换）。

> 续见 proofs/imp.class-equation.2.md
