# 预解析环　`def.pre-analytic-ring`　·　说明
根 `../`

⭐ 这个定义是在抽公理：固态理论里真正用到的不是 $A$ 本身，而是「$S$ 上的自由完备模是什么」。把这件事做成一个函子，就能对任意环（甚至解析空间）复制整套构造。

⭐ 三个基本例子：
- $\mathbb{Z}_\blacksquare$：$A = \mathbb{Z}$，$\mathbb{Z}_\blacksquare[S] = Z[S]^{\blacksquare}$；
- $\mathbb{Z}_{p,\blacksquare}$：$A = \mathbb{Z}_p$，$\mathbb{Z}_{p,\blacksquare}[S] = \varprojlim_i \mathbb{Z}_p[S_i]$（$p$-进测度）；
- $(A,\mathbb{Z})_\blacksquare$（$A$ 离散）：$A[S] = Z[S]^{\blacksquare} \otimes_{\mathbb{Z}} A$。

⚠ 这个定义在原文里带一条警告：它应当允许「导出」版本（$A$ 是单纯环）才足够一般。本图只写经典版本，够用到现在这一步。
