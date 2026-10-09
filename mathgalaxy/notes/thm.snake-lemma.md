# 蛇引理　`thm.snake-lemma`　·　说明
根 `../`

**为什么叫「蛇」**：把这条长正合列画成一圈，六个群/模串起来正好是一条蛇的形状 —— $\delta$ 是蛇头那一拐。

**$\delta$ 怎么造**（追图）：取 $x \in \ker c \subseteq C$。由 $g$ 满，取 $y \in B$ 使 $g(y) = x$；由交换性 $g'(b(y)) = c(g(y)) = c(x) = 0$，所以 $b(y) \in \ker g' = \operatorname{im} f'$，取 $z \in A'$ 使 $f'(z) = b(y)$；令

$$\delta(x) := z \pmod{\operatorname{im} a}.$$

要验证的只有一件事：**换了 $y$ 的选择，$z$ 只差一个 $a$ 的像** —— 而那正好由第一行的正合性与图的交换性给出。所以 $\delta$ 良定义，且 $\delta$ 的像落在 $\operatorname{coker} a$ 里。∎

⭐ **用处**：它是**长正合列**的引擎 —— 把短正合列 $0 \to K \to L \to M \to 0$ 的每一层（核、余核）串起来，靠的就是每层的 $\delta$。凡是「有了短正合列想推长正合列」的地方，底下都在跑蛇引理。

> 续见 notes/thm.snake-lemma.2.md
