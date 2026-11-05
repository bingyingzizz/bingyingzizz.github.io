# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

- **$S_i$ 中「$f$ 在该点局部 $i$ 维平坦」的那部分**：由秩定理，$S_i$ 局部是 $\mathbb{R}^{i}$ 上的图，$f$ 在其上局部等同于「前 $i$ 个坐标」加「其余坐标平坦」。⚠️ 这里**必须先用秩定理给的局部坐标复合一下**：$f|_{S_i}$ 的像是落在 $\mathbb{R}^{m}$ 里的，不是 $\mathbb{R}^{i}$ 里；复合之后才变成 $\mathbb{R}^{i}\to\mathbb{R}^{i}$ 的映射，才能套 $m' = i$ 的归纳假设。

- **其余部分**：逐层剥去低维子集，每一层用 Fubini 降到 $n - 1$ 维，再用内层对 $n$ 的归纳。

> 续见 proofs/imp.sard.6.md
