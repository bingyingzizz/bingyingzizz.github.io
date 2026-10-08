# 紧生成空间是余反射子范畴　`prop.cg-coreflective`　·　说明
根 `../`

- 先证 $kY$ 确实紧生成：把每个连续映射 $S \to Y$（$S$ 紧 $T_{1}$）复合 $\varepsilon_{Y}$ 抬成 $S \to kY$，再用 $kY$ 的定义（$k$-开集的取法）验证「由这些映射决定拓扑」。
- 于是任意 $f : X \to Y$ 连续（$X$ 紧生成）时，$f = \varepsilon_{Y} \circ f': X \to kY$ 给出一个到 $kY$ 的连续映射 $f'$：设 $U \subseteq kY$ 开，要证 $f'^{-1}(U)$ 在 $X$ 中开。由 $X$ 紧生成，只需对每个紧 $L \subseteq X$ 验证 $f'^{-1}(U) \cap L$ 在 $L$ 中开。而 $f|_{L} : L \to Y$ 连续、$L$ 紧，故 $f(L)$ 紧；$U \cap f(L)$ 在 $f(L)$ 中开，于是 $(f|_{L})^{-1}\bigl(U \cap f(L)\bigr) = f'^{-1}(U) \cap L$ 在 $L$ 中开。∎
- 反向由 $\varepsilon_{Y}$ 连续直接得到。这样两个方向互逆，就是那个同构。

> 续见 notes/prop.cg-coreflective.3.md
