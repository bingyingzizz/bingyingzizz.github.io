# 对的长正合列　`thm.long-exact-pair`　·　说明
根 `../`

**(c) $\operatorname{im} \partial_{*} = \ker j_{*}$。** 若 $[c]$ 来自相对同调，则 $j_{*}(\partial_{*}[c]) = [\partial c]$，而 $\partial c$ 在 $X$ 中是边缘，故为 $0$。反之若 $a \in S_{p-1}(A)$ 是闭链且 $j_{*}[a] = 0$，即 $a = \partial b$ 对某个 $b \in S_{p}(X)$；则 $b$ 相对闭（$\partial b = a \in S_{*}(A)$），且 $\partial_{*}[b] = [\partial b] = [a]$。

三条正合性合起来就是长正合列；整个论证只用到 $S_{*}(A) \subseteq S_{*}(X)$ 是子复形，没有用到 $A$ 的闭性、开性或任何附加条件。∎

**为什么同调有这条而同伦没有这么方便**：**相对**同伦群的长正合列对任意子空间对 $(X, A)$ 都成立，不需要纤维化；要小心的是「把相对群换成商空间 $X/A$ 的绝对群」那一步，它才需要 $(X, A)$ 是好的对（NDR / 余纤维化）。同调的这条只要 $A \subseteq X$ 是任意子空间。这是「链的复形」比「同伦群」好用的核心区别之一。

> 续见 notes/thm.long-exact-pair.4.md
