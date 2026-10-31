# 类方程 + 让 Sylow 子群作用 $\implies$ Sylow 三条
`imp.sylow` · 推出 · strong 边 · 根 `../`

`thm.class-equation` 类方程 + `def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 → `thm.sylow` Sylow 定理

| + \sum_i [G : C_G(x_i)]$。左端被 $p$ 整除、$|Z(G)|$ 不被 $p$ 整除，故存在某个 $i$ 使 $p \nmid [G : C_G(x_i)]$。由 $|G| = [G : C_G(x_i)]\cdot|C_G(x_i)|$ 与 $p^{a} \mid |G|$ 得 $p^{a} \mid |C_G(x_i)|$；又 $x_i$ 非中心故 $C_G(x_i) \ne G$，于是 $|C_G(x_i)| < |G|$。对 $C_G(x_i)$ 用归纳假设得 $p^{a}$ 阶子群，它也是 $G$ 的。

> 续见 proofs/imp.sylow.4.md
