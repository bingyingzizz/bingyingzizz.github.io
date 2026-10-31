# Jacobi 符号　`def.jacobi-symbol`　·　说明
根 `../`

⚠ **它不再回答「有没有解」**：$\left(\frac{a}{n}\right) = 1$ 不保证 $x^{2} \equiv a \pmod n$ 有解。例如 $\left(\frac{2}{15}\right) = \left(\frac{2}{3}\right)\left(\frac{2}{5}\right) = (-1)(-1) = 1$，但 $x^{2} \equiv 2 \pmod{15}$ 无解（模 $3$ 与模 $5$ 都要成立，而 $2$ 在模 $3$ 下不是剩余）。



它的价值在**计算**：Jacobi 符号可以完全用互反律移项，不需要分解 $n$，所以能快速算；而「Jacobi 符号为 $-1$」确实能断定无解（充分条件）。



这条「便宜但会撒谎」的性质正是 Solovay–Strassen 与 Miller–Rabin 这类概率素性检验的入口：用 Jacobi 符号筛掉大部分合数。
