# 纤维积 / 纤维余积　`def.fibered-product`　·　说明
根 `../`

直观：拉回是「在底 $X_0$ 上匹配之后的积」—— 解方程 $f_1(x_1) = f_2(x_2)$；推出是「把 $X_1, X_2$ 在 $X_0$ 的像上粘起来」。

例（$\mathbf{Set}$）：



$$X_1 \times_{X_0} X_2 = \{(x_1, x_2) \in X_1 \times X_2 : f_1(x_1) = f_2(x_2)\}, \qquad X_1 \cup_{X_0} X_2 = (X_1 \sqcup X_2)/\!\sim$$



其中 $\sim$ 由 $f_1(x_0) \sim f_2(x_0)$（$x_0 \in X_0$）生成。$\mathbf{Top}$ 里拉回取子空间拓扑、推出取商拓扑。

$\mathbf{Ab}$ 里两个都化成核与余核：把 $f: X \to S$、$g: Y \to S$ 拼成 $\varphi : X \oplus Y \to S$，$(x,y) \mapsto f(x) - g(y)$，则推出 $= \operatorname{coker} \varphi$、拉回 $= \ker \varphi$ —— 第一步取直和，第二步把 $f, g$ 的差商掉。
