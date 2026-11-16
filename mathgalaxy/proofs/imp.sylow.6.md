# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 + `lem.p-group-subgroups` p-群的真子群严格小于其正规化子 → `thm.sylow` Sylow 定理

**（1'）所有 $p^{i}$ 阶子群（$0 \le i \le a$）。** 上面已造出 $P \le G$、$|P| = p^{a}$（Sylow $p$-子群）。对 $i$ 归纳造 $P$ 的 $p^{i}$ 阶子群：$i = 0$ 取 $\{e\}$。设已有 $H \le P$、$|H| = p^{i} < p^{a}$。对 $p$-群 $P$ 用 `lem.p-group-subgroups`：$H$ 是真子群，故 $H < N_P(H)$，于是 $N_P(H)/H$ 是非平凡 $p$-群；同一条引理给出它的中心非平凡，取中心里非平凡元 $x$、令 $k = \operatorn

> 续见 proofs/imp.sylow.7.md
