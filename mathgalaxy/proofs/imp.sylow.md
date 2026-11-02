# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 → `thm.sylow` Sylow 定理

记 $|G| = p^{a} m$、$p \nmid m$。

**（1）存在性：对 $|G|$ 归纳。** $a = 0$ 时取平凡子群。设 $a \ge 1$。

- **情形 A：$p \mid |Z(G)|$。** 取 $z \in Z(G)$，$\operatorname{ord}(z) = p$（Cauchy 引理，由类方差的推论加上对阶归纳可得）。

令 $\overline G := G/\langle z\rangle$，则 $|\overline G| = p^{a-1}m$。

由归纳假设 $\overline G$ 有 $p^{a-1}$ 阶子群 $\overline P$；

> 续见 proofs/imp.sylow.2.md
