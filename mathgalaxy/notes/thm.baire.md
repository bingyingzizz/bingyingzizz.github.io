# Baire 纲定理　`thm.baire`　·　说明
根 `../`

证法（球套法）分四步：

1. **起点**：记 $B_0 := B(x, \varepsilon)$。

$O_1$ 稠密开 $\implies$ $B_0 \cap O_1$ 是非空开，于是可取 $x_1$ 与 $\varepsilon_1 < \min(\varepsilon/2,\ 1)$ 使

$$\overline{B(x_1, \varepsilon_1)} \subseteq B(x, \varepsilon) \cap O_1 .$$

2. **归纳**：已取 $x_n, \varepsilon_n$（且 $\varepsilon_n < 1/n$）。

由 $O_{n+1}$ 稠密开，$B(x_n, \varepsilon_n) \cap O_{n+1}$ 仍是非空开，取

$$\overline{B(x_{n+1}, \varepsilon_{n+1})} \subseteq B(x_n, \varepsilon_n) \cap O_{n+1}, \qquad \varepsilon_{n+1} < \frac{1}{n+1} .$$

3. **嵌套闭球取点**：半径 $\varepsilon_n \to 0$，而 $X$ 完备，于是 $\bigcap_n \overline{B(x_n, \varepsilon_n)} \ne \emptyset$，取其中一点 $y$。

（这里「半径趋于 $0$」不能省：完备性只保证半径趋于 $0$ 的嵌套闭球有公共点。）

4. **收尾**：对每个 $n$，$y \in \overline{B(x_n, \varepsilon_n)} \subseteq B_0 \cap O_n$，所以 $y \in B_0$ 且 $y \in \bigcap_n O_n$。

> 续见 notes/thm.baire.2.md
