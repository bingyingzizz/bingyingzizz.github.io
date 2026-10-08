# 简单函数逼近　`thm.simple-approximation`　·　说明
根 `../`

(a) 的构造就是「切蛋糕」：把值域在 [0, n) 上按 $2^{-n}$ 切碎，超过 $n$ 的部分一律抹成 $n$ ——



$$\varphi_n = \sum_{k=0}^{2^n\cdot n-1} k\cdot2^{-n}\cdot\chi_{E_n^k} + n\cdot\chi_{F_n}, $$

$$E_n^k = f^{-1}((k\cdot2^{-n}, (k+1)\cdot2^{-n}]), \quad  F_n = f^{-1}((n, +\infty])$$



每一层都是可测集的原像，所以 $\varphi _{n}$ 是简单函数；$n$ 越大格子越细、天花板越高，于是单调递增地爬到 $f$。

(b) 把 $f = g + ih$ 拆成 $g = g^+ - g^-$、$h = h^+ - h^-$，对四个非负部分用 (a)：



$$\varphi_n = \psi_n^+ - \psi_n^- + i(\zeta _n^+ - \zeta _n^-)$$
