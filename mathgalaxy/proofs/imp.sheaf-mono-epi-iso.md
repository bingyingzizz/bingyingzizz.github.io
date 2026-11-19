# imp.sheaf-mono-epi-iso
`imp.sheaf-mono-epi-iso` · 推出 · strong 边 · 根 `../`

`prop.sheaf-epi-criterion` 满态射的局部判据 + `def.equalizer` 等化子 / 余等化子 + `def.sheaf` 层 + `def.topos` 拓扑斯 + `def.image` 像 / 余像 → `prop.sheaf-mono-epi-iso` 层中单满即同构

**证明。** 设 $u : F \to G$ 是层之间的态射。
**1.** 设 $u$ 既单又满。

由满性（层中满态射的**局部**判据），对 $1_{G} \in G(G)$ 存在覆盖 $(G_{i}\to G)$ 与 $t_{i}\in F(G_{i})$ 使 $u(t_{i}) = 1_{G}|_{G_{i}}$。

在双重拉回 $G_{i}\times_{G}G_{j}$ 上，$t_{i}$ 与 $t_{j}$ 的像都等于 $1_{G}$ 的限制，由 $u$ 单得 $t_{i}|= t_{j}|$ —— 相容 ✓。

层条件给唯一的 $v \in F(G)$ 与 $v|_{G_{i}} = t_{i}$，于是 $u(v) = 1_{G}$（两边在覆盖上一致，层分离）。

又 $u(v u) = u$，而 $u$ 单 $\implies v u = 1_{F}$。

> 续见 proofs/imp.sheaf-mono-epi-iso.2.md
