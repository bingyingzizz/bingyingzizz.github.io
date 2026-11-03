# Fréchet 导数　`thm.frechet-derivative`　·　续页（第 2 页）
[在星图里打开](../#n=thm.frechet-derivative)　·　第 1 页 [nodes/thm.frechet-derivative.md](./thm.frechet-derivative.md)

## 陈述（续）
设 $E, F$ 是赋范空间，$\Omega \subseteq E$ 开，$f : \Omega \to F$，$a \in \Omega$。称 $f$ 在 $a$ 处 **Fréchet 可微**，若存在**有界线性算子** $T \in B(E, F)$ 使

$$f(a + h) = f(a) + T h + o(\|h\|) \qquad (\|h\| \to 0),$$

即
$$\lim_{\|h\| \to 0} \frac{\|f(a+h) - f(a) - Th\|}{\|h\|} = 0 .$$

这样的 $T$ 若存在则**唯一**（取 $h = t v$、$t \to 0$ 即看出 $T$ 在每条射线上被钉死），记 $f'(a) := T \in B(E, F)$。
**与 Gâteaux 导数的区别**：Gâteaux 导数只要求沿每条射线 $t \mapsto f(a + tv)$ 的导数存在（得到一个线性映射，甚至未必连续）；Fréchet 可微则要求**一致的**余项估计。于是

$$\text{Fréchet 可微} \implies \text{Gâteaux 可微，且两者相等} ,$$
反过来不成立（Gâteaux 导数的存在不保证余项一致小）。

> 续见 [nodes/thm.frechet-derivative.3.md](./thm.frechet-derivative.3.md)
