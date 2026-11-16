# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 + `lem.p-group-subgroups` p-群的真子群严格小于其正规化子 → `thm.sylow` Sylow 定理

**（2）共轭性。** 设 $P, Q$ 是 Sylow $p$-子群，考虑 $P$ 在左陪集集合 $X := G/Q$ 上的作用 $g \cdot (hQ) := (gh)Q$。

$$\#X = [G : Q] = m, \qquad p \nmid m.$$

由轨道分解 $\#X = \sum \#\text{轨道}$，每个轨道长 $= [P : P_{hQ}]$ 是 $p$ 的幂。

若**没有**不动点，则每个轨道长都被 $p$ 整除，于是 $p \mid \#X = m$，矛盾。

> 续见 proofs/imp.sylow.9.md
