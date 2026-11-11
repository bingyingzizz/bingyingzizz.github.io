# $\chi=V-E+F$ 递推给出 $\chi=2-k$
`dep.eulerchar-eulercharnonor` · 推出 · strong 边 · 根 `../`

`thm.euler-characteristic` Euler 示性数 → `prop.eulerchar-nonorientable` Euler 示性数与不可定向亏格

先算 $\chi(\mathbb{RP}^{2})=6-15+10=1$（正二十面体按对径点粘合），再用连通和公式 $\chi(S_{k})=\chi(S_{k-1})+\chi(\mathbb{RP}^{2})-2$ 递推得 $\chi(S_{k})=2-k$。两处用的都是 `thm.euler-characteristic` 的组合算法 $\chi=V-E+F$；最后「与剖分无关」再用它的同调算法 $\chi=\sum_{p}(-1)^{p}\beta_{p}$。∎

> $\chi$ 的组合算法（$V - E + F$）是这一条的另一半。
