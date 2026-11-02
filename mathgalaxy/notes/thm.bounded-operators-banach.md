# B(E,F) 完备　`thm.bounded-operators-banach`　·　说明
根 `../`

证法（逐点取极限）：取 $B(E,F)$ 里的 Cauchy 列 $u_n$。对每个 $x$，$\|u_n x - u_m x\| \le \|u_n - u_m\|\,\|x\| \to 0$，故 $(u_n x)$ 在 $F$ 里 Cauchy，有极限 $u(x)$。$u$ 线性（极限保线性）、有界（取 $N$ 使 $n, m \ge N$ 时 $\|u_n - u_m\| < \varepsilon$，则 $\|u(x)\| \le \|u(x) - u_N(x)\| + \|u_N(x)\| \le (\varepsilon + \|u_N\|)\|x\|$），且 $\|u_n - u\| \to 0$。

⭐ 要害是「$\|u_n\|$ 一致有界」（Cauchy 列必一致有界），所以极限的范数不会跳。

⚠️ $E$ 不需要完备：完备性只用在 $F$ 上。
