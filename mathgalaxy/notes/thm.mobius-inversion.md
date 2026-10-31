# Möbius 反演　`thm.mobius-inversion`　·　说明
根 `../`

**$\Leftarrow$ 的方向**（唯一要看的方向）：把 $f(d)$ 的表达式代进去，



$$\sum_{d\mid n} f(d) = \sum_{d\mid n}\ \sum_{e\mid (n/d)} \mu(e)\, g\!\left(\frac{n}{de}\right) = \sum_{m \mid n} g(m) \sum_{e \mid (n/m)} \mu(e) .$$



内层和由 `thm.mu-sum` 只在 $n/m = 1$ 时为 $1$，其余为 $0$ —— 于是整个式子塌成 $g(n)$。



**另一方向**同理（或直接用 $\Leftarrow$ 于反向的偏序）。所以「反演」不是新定理，是 $\mu * 1 = \delta$ 这一句话的两面。



**用法**：数论里的「求和  与  还原」几乎都靠它。例如 $\sum_{d\mid n}\varphi(d) = n$ 反演出 $\varphi(n) = \sum_{d\mid n}\mu(d)\,(n/d)$；素数计数也是先有 $\log n! = \sum_{m \le n}\psi(n/m)$ 再反演。
