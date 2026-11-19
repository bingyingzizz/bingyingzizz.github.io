# imp.rhom-chaus-banach-zero
`imp.rhom-chaus-banach-zero` · 推出 · strong 边 · 根 `../`

`def.spectral-sequence` 谱序列 + `def.chaus` 紧 Hausdorff 空间范畴 + `def.banach-space` Banach 空间 + `def.derived-category` 导出范畴 → `prop.rhom-chaus-banach-zero` 紧 Haus 到实 Banach 全零

**证明（把闭链写成收敛级数）。** 仍用 Breen–Deligne 谱序列 $E^{p,q}_{1} = \bigoplus_{i} H^{q}(M^{s_{p,i}}\times S, N) \implies \operatorname{Ext}^{p+q}_{\mathbb{Z}}(M,N)(S)$。
- 由 **Thm（实 Banach 在紧 Hausdorff 上零调）**，$M^{s_{p,i}}\times S$ 是紧 Hausdorff（$M$ 紧、$S$ Stonean 紧），故 $q > 0$ 的整行是 $0$；

只剩下 $q = 0$ 那一行，即复形 $K^{\bullet}$，$K^{n} := \bigoplus_{i} C\bigl(M^{s_{n,i}}\times S,\ N\bigr)$（Banach 空间）。

> 续见 proofs/imp.rhom-chaus-banach-zero.3.md
