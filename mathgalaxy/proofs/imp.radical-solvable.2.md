# imp.radical-solvable
`imp.radical-solvable` · 推出 · strong 边 · 根 `../`

`thm.galois-correspondence` 伽罗瓦基本定理 + `def.solvable-group` 可解群 + `prop.sn-solvable` 对称群的可解性 + `def.galois-extension` 伽罗瓦扩张 + `def.roots-of-unity` 单位根 + `thm.cayley-hamilton` Cayley–Hamilton 定理 → `thm.radical-solvable` 根式可解 与 伽罗瓦群可解

**引理（Kummer 一步）**：设 $F$ 含本原 $m$ 次单位根 $\zeta$，$E/F$ 是 $m$ 次循环扩张，则 $E=F(\beta)$ 且 $\beta^{m}\in F$。证明：取生成元 $\sigma$，把 $\sigma$ 看成 $E$ 上的 $F$-线性变换。$\sigma^{m}=1$，而 $x^{m}-1$ 在 $F$ 上分裂且无重根，故 $\sigma$ 可对角化，其特征值全是 $m$ 次单位根。**这里关键是 $\sigma$ 的极小多项式恰为 $x^{m}-1$**：由 Dedekind 线性无关（「伽罗瓦对应」那条的引理 1：两两不同的自同构作为函数线性无关），$1,\sigma,\ldots,\sigma^{m-1}$ 在 $E$ 上线性无关，故任何

> 续见 proofs/imp.radical-solvable.3.md
