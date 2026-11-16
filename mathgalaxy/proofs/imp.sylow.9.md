# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 + `lem.p-group-subgroups` p-群的真子群严格小于其正规化子 → `thm.sylow` Sylow 定理

故有不动点 $hQ$：对一切 $g \in P$ 有 $ghQ = hQ$，即 $h^{-1}Ph \le Q$。

两端阶相同（都是 $p^{a}$），故 $h^{-1}Ph = Q$：$P$ 与 $Q$ 共轭。

把上面论证中的 $P$ 换成任一 $p$-子群 $R$，同样得到 $h^{-1}Rh \le Q$：**任何 $p$-子群都含在某个 Sylow 子群中**。

> 续见 proofs/imp.sylow.10.md
