# 可缩族的微分定理　`thm.differentiation-general`　·　说明
根 `../`

证明是一行估计：由 $E_r \subseteq B(r,x)$ 与 $m(E_r) > \alpha m(B(r,x))$，



$$\frac{1}{m(E_r)} \int_{E_r} |f - f(x)| \le \frac{1}{m(E_r)} \int_{B(r,x)} |f - f(x)| \le (1/\alpha)\cdot m(B(r,x)) \int_{B(r,x)} |f - f(x)|$$



而最右边由「$x \in L_f$」趋于 0。∎

⭐ 全部难度都在把 L_f 的定义选对（用 $|f(y) - f(x)|$ 而不是 $|f(y)|$）—— 选对之后这一步就是白送的。
