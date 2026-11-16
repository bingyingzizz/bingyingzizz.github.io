# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 + `lem.p-group-subgroups` p-群的真子群严格小于其正规化子 → `thm.sylow` Sylow 定理

令 $\overline G := G/\langle z\rangle$，则 $|\overline G| = p^{a-1}m$。

由归纳假设 $\overline G$ 有 $p^{a-1}$ 阶子群 $\overline P$；

取 $\pi^{-1}(\overline P) \le G$（$\pi : G \to \overline G$ 是自然满同态），其阶为 $|\overline P| \cdot |\langle z\rangle| = p^{a}$。
- **情形 B：$p \nmid |Z(G)|$。** 由类方程$|G| = |Z(G)| + \sum_i [G : C_G(x_i)]$。

> 续见 proofs/imp.sylow.5.md
