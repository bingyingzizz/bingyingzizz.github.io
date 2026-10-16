# Kummer 判别法　`thm.kummer`　·　说明
根 `../`

⭐ 这一条是**正项级数判据的总纲**：所有「比值型」的判别法都是它取不同的 $\{c_n\}$ 得到的 ——

- $c_n = 1$：**d'Alembert（比值）判别法** —— $\lim \frac{a_{n+1}}{a_n} < 1$ 收敛、$> 1$ 发散；
- $c_n = n$：**Raabe 判别法** —— $\lim n\bigl(\frac{a_n}{a_{n+1}} - 1\bigr) > 1$ 收敛；
- $c_n = n \ln n$：**Bertrand 判别法** —— 比 Raabe 更细的一档；
- $c_n$ 由 Gauss 展开给出：**Gauss 判别法** —— 处理 $a_n/a_{n+1} = 1 + \frac{\mu}{n} + O(n^{-1-\delta})$ 那一类。

⚠ 收敛那一支要求的是 $\liminf K_n > 0$（不是 $\lim K_n$，也不是某一个 $K_n > 0$）。

⚠ 发散那一支多一个条件「$\sum 1/c_n$ 发散」—— 取 $c_n = 1$ 时它就是 $\sum 1$ 发散，取 $c_n = n$ 时是调和级数发散，都不是免费的。

> 续见 notes/thm.kummer.2.md
