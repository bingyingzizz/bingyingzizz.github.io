# 一点紧化　`def.one-point-compactification`　·　说明
根 `../`

- **$X^{*}$ 紧：不需要任何假设**。任取 $X^{*}$ 的开覆盖，必有一个成员含 $\infty$（记 $U\cup\{\infty\}$），于是 $X\setminus U$ 紧；它被剩下的开集盖住，由**紧性**取有限子覆盖，加上 $U\cup\{\infty\}$ 本身即得有限子覆盖。整段只用「紧集的开覆盖有有限子覆盖」这一条，**没用 Hausdorff、没用局部紧**。
- **$X^{*}$ Hausdorff $\iff$ $X$ 局部紧 Hausdorff**：两个方向都要付出代价。
  $\cdot$ ($\Leftarrow$) 要用**局部紧**：任取 $x \in X$，把它与 $\infty$ 分开需要「$x$ 的紧邻域 $K$」，于是 $X\setminus K$ 开、$K^{\circ}$ 是 $x$ 的开邻域，两者不交。**没有局部紧就造不出这个紧邻域**。
  $\cdot$ ($\implies$) 从 $X^{*}$ Hausdorff 反推 $X$ Hausdorff 是免费的（子空间继承）；反推局部紧要用**紧集的闭性**：$\infty$ 的开邻域 $U\cup\{\infty\}$ 满足 $X\setminus U$ 紧，于是 $U$ 的闭包在 $X$ 中…… 这一方向正是「紧 Hausdorff 里紧集闭」的用法。

> 续见 notes/def.one-point-compactification.4.md
