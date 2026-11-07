# 对的长正合列　`thm.long-exact-pair`　·　说明
根 `../`

**(a) $\operatorname{im} j_{*} = \ker q_{*}$。** 若 $[c] = j_{*}[a]$（$a$ 是 $A$ 中的闭链），则 $q_{*}[c] = [q(a)] = 0$，因为 $a \in S_{*}(A)$ 在商复形里就是 $0$。反之设 $q_{*}[c] = 0$，即 $q(c) = \partial b$ 对某个 $b \in S_{p+1}(X)$；则 $q(c - \partial b) = 0$，故 $c - \partial b \in S_{p}(A)$，且 $\partial(c - \partial b) = 0$，于是 $[c] = j_{*}[c - \partial b]$。

**(b) $\operatorname{im} q_{*} = \ker \partial_{*}$。** 若 $[c] = q_{*}[z]$ 且 $z$ 是 $X$ 中的闭链，则 $\partial c = \partial z = 0$，故 $\partial_{*}[c] = 0$。反之设 $\partial_{*}[c] = 0$，即 $\partial c = \partial a$ 对某个 $a \in S_{p-1}(A)$；令 $z := c - a$，则 $\partial z = 0$ 且 $q(z) = q(c)$，故 $[c] = q_{*}[z]$。

> 续见 notes/thm.long-exact-pair.3.md
