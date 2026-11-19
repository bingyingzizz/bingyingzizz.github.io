# imp.rhom-chaus-banach-zero
`imp.rhom-chaus-banach-zero` · 推出 · strong 边 · 根 `../`

`def.spectral-sequence` 谱序列 + `def.chaus` 紧 Hausdorff 空间范畴 + `def.banach-space` Banach 空间 + `def.derived-category` 导出范畴 → `prop.rhom-chaus-banach-zero` 紧 Haus 到实 Banach 全零

**证法里的关键工具**是分解上乘 $p$ 的同伦：紧 Hausdorff 群上有「乘 $2$」这个映射，它在 Banach 空间里**可逆**（除以 $2$）；利用 $2 - [2]$ 的同伦，可以把一个闭链写成 $d$(一个收敛级数)，即每个闭链都是边界。收敛用 Banach 的完备性。

⚠️ 要求 $N$ 是**实** Banach 空间（带 $\mathbb{R}$-模结构），不是任意 Banach 阿贝尔群 —— 除以 $2$ 那一步要用到标量结构。

> 续见 proofs/imp.rhom-chaus-banach-zero.2.md
