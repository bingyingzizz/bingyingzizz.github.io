# 中国剩余定理：用 Bézout 造出「单位分解」
`imp.nt-crt` · 推出 · strong 边 · 根 `../`

`thm.bezout` Bézout 恒等式 → `thm.crt` 中国剩余定理

由 $\gcd(N/n_{i}, n_{i}) = 1$ 与 Bézout，存在 $u_{i}, v_{i}$ 使 $u_{i}(N/n_{i}) + v_{i} n_{i} = 1$。令 $e_{i} := u_{i}(N/n_{i})$，则



$$e_{i} \equiv 1 \pmod{n_{i}}, \qquad e_{i} \equiv 0 \pmod{n_{j}}\ (j \ne i).$$



于是对任意右端 $(a_{1}, \cdots, a_{k})$，$x := \sum_{i} a_{i} e_{i}$ 满足 $x \equiv a_{i} \pmod{n_{i}}$。



**唯一性**：两解之差被每个 $n_{i}$ 整除，而 $n_{i}$ 两两互素，故被乘积 $N$ 整除。



**同构**：映射 $[a] \mapsto ([a], \cdots, [a])$ 是环同态；上面的构造给出满射，两边的元素个数都是 $N$（有限环同满射即单射），故是同构。
