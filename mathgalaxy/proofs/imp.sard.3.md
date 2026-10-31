# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

- **$S_i$ 中「$f$ 在该点局部 $i$ 维平坦」的那部分**：把 $S_i$ 局部写成 $\mathbb{R}^{i}$ 上的图（秩定理思想），于是 $f|_{S_i}$ 局部是 $i$ 维映射，对 $i < m$ 用外层归纳假设（注意此时 $\operatorname{rank} <$ 目标维数，直接套 $m' = i$ 的归纳）；
- **其余部分**：逐层剥去低维子集，每一层用 Fubini 降到 $n - 1$ 维，再用内层对 $n$ 的归纳。

**收敛性：** 上面两处归纳都是「对 $(n, m)$ 的良序」进行的（按 $n + m$ 或按字典序），每一层都把问题降到更小的 $(n', m')$，有限步终止。

> 续见 proofs/imp.sard.4.md
