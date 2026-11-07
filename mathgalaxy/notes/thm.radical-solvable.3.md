# 根式可解 与 伽罗瓦群可解　`thm.radical-solvable`　·　说明
根 `../`

**$\Leftarrow$（群可解 $\implies$ 根式可解）**：设 $G=\operatorname{Gal}(K/F)$ 可解。先假设 $F$ 含本原 $n$ 次单位根，$n=|G|$；对 $|G|$ 归纳。$|G|=1$ 时 $K=F$，无事可做。设 $|G|>1$。可解群有极大的真正规子群 $H$，此时 $G/H$ 单且交换，故是素数阶 $p$ 的循环群。令 $E=K^{H}$，伽罗瓦对应给 $[E:F]=p$、$\operatorname{Gal}(E/F)=G/H$ 循环。$F$ 含 $\zeta_{p}$，由 Kummer 一步，$E=F(\beta)$、$\beta^{p}\in F$。另一方面 $K/E$ 伽罗瓦、群为 $H$，$H$ 可解且 $|H|<|G|$；$E$ 含本原 $|H|$ 次单位根（$|H|$ 整除 $n$），归纳假设给出从 $E$ 到 $K$ 的根式塔。把它接在一步 $F\subseteq E$ 之后，就是 $K$ 在 $F$ 上的根式塔。

> 续见 notes/thm.radical-solvable.4.md
