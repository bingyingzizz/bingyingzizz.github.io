# gcd 整环　`def.gcd-domain`　·　说明
根 `../`

为什么必须这样定义：$\mathbb{Z}$ 里「最大的公因数」靠 $|d|$ 比较，一般整环没有绝对值。改用「被一切公因子整除」才对：$\mathbb{Z}$ 里它等价于「绝对值最大」，而 $\mathbb{Z}[i]$ 里也只有这个说法成立。



层级：UFD $\implies$ gcd 整环（`imp.ring-ufd-gcd`），反之不然（$\mathbb{Z}[\sqrt{-5}]$ 连 $\gcd(6, 2(1+\sqrt{-5}))$ 都不存在）。Bézout 整环 $\implies$ gcd 整环，因为 $\gcd$ 直接由线性组合给出。



$\gcd$ 可以不存在 —— 这正是「UFD 的分解唯一性」不能用 gcd 替代的原因。
