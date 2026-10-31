# 反演：交换求和次序，内层只剩 $n/m=1$
`imp.nt-mobius-inversion` · 推出 · strong 边 · 根 `../`

`thm.mu-sum` Möbius 和的恒等式 → `thm.mobius-inversion` Möbius 反演

设 $g(n) = \sum_{d \mid n} f(d)$ 对一切 $n$。要证 $f(n) = \sum_{d\mid n}\mu(d)g(n/d)$。



代进去：



$$\sum_{d\mid n}\mu(d)\,g\!\left(\frac{n}{d}\right) = \sum_{d\mid n}\mu(d)\sum_{e \mid (n/d)} f(e) .$$



令 $e\,d = n/m$，即 $m = n/(de)$；交换求和次序（有限和，可换）：



$$= \sum_{m \mid n} f(m)\sum_{d \mid (n/m)}\mu(d) .$$



内层由 $\sum_{d\mid t}\mu(d) = [t = 1]$ 只在 $t = n/m = 1$ 时为 $1$，其余为 $0$。故整个和为 $f(n)$。



反方向把上面这段反过来用（或对「$\mu$ 反演也成立」再套一次）即得。所以反演是 $\mu * 1 = \delta$ 的同义反复。
