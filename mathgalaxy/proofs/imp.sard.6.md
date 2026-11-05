# 证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini
`imp.sard` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 → `thm.sard` Sard 定理

**收敛性：** 上面两处归纳都是「对 $(n, m)$ 的良序」进行的（按 $n + m$ 或按字典序），每一层都把问题降到更小的 $(n', m')$，有限步终止。

**门槛：** 一般情形每降一维就多要一阶导数，累起来要求 $k \ge n-m+1$；另外 $k\ge1$ 永远要有（否则连可微性都没有）。所以完整条件是 $k \ge \max\{n-m+1,\,1\}$。

> 续见 proofs/imp.sard.7.md
