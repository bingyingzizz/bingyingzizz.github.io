# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 → `thm.sylow` Sylow 定理

对 $C_G(x_i)$ 用归纳假设得 $p^{a}$ 阶子群，它也是 $G$ 的。

（$p^{i}$ 阶子群（$i < a$）由对 $p^{a}$ 阶子群再用一次「$p$-群有 $p^{i}$ 阶子群」的归纳得到。）

**（2）共轭性。** 设 $P, Q$ 是 Sylow $p$-子群，考虑 $P$ 在左陪集集合 $X := G/Q$ 上的作用 $g \cdot (hQ) := (gh)Q$。

$$\#X = [G : Q] = m, \qquad p \nmid m.$$

由轨道分解 $\#X = \sum \#\text{轨道}$，每个轨道长 $= [P : P_{hQ}]$ 是 $p$ 的幂。

> 续见 proofs/imp.sylow.4.md
