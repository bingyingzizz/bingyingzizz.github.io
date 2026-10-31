# $\tau$、$\sigma$ 的乘积公式：指数独立选取
`imp.nt-divisor-formula` · 推出 · strong 边 · 根 `../`

`thm.fundamental-arithmetic` 算术基本定理 → `thm.divisor-formula` τ 与 σ 的乘积公式

由唯一分解，$d \mid n$ 当且仅当 $d = p_{1}^{f_{1}}\cdots p_{r}^{f_{r}}$ 且 $0 \le f_{i} \le e_{i}$，且这种 $(f_{1},\cdots,f_{r})$ 与 $d$ 一一对应。于是因数集与 $\prod_{i}[0, e_{i}]$ 的整数点一一对应，个数为 $\prod(e_{i}+1)$。



$\sigma$：按上述对应，$\sigma(n) = \sum_{f_{1}=0}^{e_{1}}\cdots\sum_{f_{r}=0}^{e_{r}} p_{1}^{f_{1}}\cdots p_{r}^{f_{r}} = \prod_{i}\left(\sum_{f=0}^{e_{i}}p_{i}^{f}\right)$，内层是等比数列，和为 $(p_{i}^{e_{i}+1}-1)/(p_{i}-1)$。



两个公式都是「乘积」而不是「和」，正是因为因数分解与指数选取都是**独立**的。
