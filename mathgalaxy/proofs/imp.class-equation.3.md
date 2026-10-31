# 共轭作用的轨道分解 + 轨道–稳定子 $\implies$ 类方程
`imp.class-equation` · 推出 · strong 边 · 根 `../`

`def.group-action` 群作用 + `thm.orbit-stabilizer` 轨道–稳定子定理 → `thm.class-equation` 类方程

**第四步：$p$-群那一档。** 若 $|G| = p^{n}$，则每项 $[G : C_G(x_i)] = p^{k_i}$（$k_i \ge 1$，因为 $x_i$ 非中心故 $C_G(x_i) \ne G$）。于是右端除 $|Z(G)|$ 外都被 $p$ 整除，左端也被 $p$ 整除，故 $p \mid |Z(G)|$；又 $Z(G) \ne \emptyset$ 含 $e$，故 $|Z(G)| \ge p$，特别地 $Z(G) \ne \{e\}$。∎

> ⭐ 第三步的「把长度 1 的类拎出来」不是技巧，而是**必须**：中心化子等于 $G$ 时 $[G : C_G(x)] = 1$，直接写求和会让中心被重复计入 $|Z(G)|$ 次。
