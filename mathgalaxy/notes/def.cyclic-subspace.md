# 循环子空间　`def.cyclic-subspace`　·　说明
根 `../`

$K[T]v$ 是包含 $v$ 的最小 $T$-不变子空间；反之，任何包含 $v$ 的 $T$-不变子空间都包含全部 $T^kv$。
令 $\mu_v$ 是使 $p(T)v=0$ 的首一多项式（$K[x]$ 是主理想整环，故存在且唯一），则 $\dim_K K[T]v=\deg\mu_v$，且作为 $K[x]$-模有 $K[T]v\cong K[x]/(\mu_v)$。
有限维时，$v$ 是循环向量当且仅当 $\deg\mu_v=\dim V$；此时 $\mu_T=\chi_T$。反之，若 $\mu_T=\chi_T$，则存在循环向量（例如取 $1,x,\ldots$ 的模对应）。
例：友矩阵 $C_d$ 的 $e_1$ 是循环向量（见 `def.companion-matrix`）；$\operatorname{diag}(C_d,C_d)$ 不是循环的，因为它的极小多项式仍为 $d$ 而维数是 $2\deg d$。
