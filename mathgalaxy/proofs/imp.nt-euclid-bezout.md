# Bézout 系数：把余数逐次回代
`imp.nt-euclid-bezout` · 推出 · strong 边 · 根 `../`

`thm.euclid-algorithm` 辗转相除法 → `thm.bezout` Bézout 恒等式

记 $r_{n} = \gcd(a,b)$。回代从最后一步开始：$r_{n} = r_{n-2} - q_{n-1} r_{n-1}$，而 $r_{n-1}$ 又是 $r_{n-3}, r_{n-2}$ 的整系数组合，如此一路上溯，每一步的系数都是整数。



结论：存在 $u, v \in \mathbb{Z}$ 使 $r_{n} = u a + v b$。因为每一步只是「减掉整数倍的上一项」，系数不会被除，所以不必担心有理数。



反过来，任何 $ua + vb$ 都被 $\gcd(a,b)$ 整除，故 $\{ua+vb\} \subseteq d\mathbb{Z}$；而上面已给出 $d$ 本身，所以两者相等。
