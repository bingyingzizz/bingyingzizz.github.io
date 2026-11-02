# 主理想整环　`def.pid`　·　说明
根 `../`

例：$\mathbb{Z}$（每个理想是 $(n)$）、$K[x]$（理想由次数最低的多项式生成）、$\mathbb{Z}[i]$。



反例：$\mathbb{Z}[x]$ 不是 PID —— $(2, x)$ 不是主理想（若 $(2,x) = (f)$，则 $f \mid 2$ 迫使 $f$ 是常数 $\pm 1$ 或 $\pm 2$；前者给出 $(f) = A$、后者不含 $x$，都不对）。$K[x, y]$ 同理，$(x, y)$ 不是主理想。



PID $\implies$ UFD（`imp.ring-pid-ufd`）是这类环的中心定理：分解的存在性靠「理想升链必停」（Noether），唯一性靠「不可约 = 素」（Bézout 性质来自 PID）。
