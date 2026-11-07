# 对的长正合列　`thm.long-exact-pair`　·　说明
根 `../`

**证明**：记 $i : S_{*}(A) \hookrightarrow S_{*}(X)$ 为包含、$q : S_{*}(X) \twoheadrightarrow S_{*}(X, A) := S_{*}(X)/S_{*}(A)$ 为商映射。两者都是链映射，且对每个 $p$

$$0 \to S_{p}(A) \xrightarrow{\ i\ } S_{p}(X) \xrightarrow{\ q\ } S_{p}(X, A) \to 0$$

是短正合列。同调长正合列由此短正合列得到；下面把连接同态和三个正合位写全。

**连接同态。** 取 $[c] \in H_{p}(X, A)$，其中 $c \in S_{p}(X)$ 且 $\bar\partial[c] = 0$，即 $\partial c \in S_{p-1}(A)$。令 $\partial_{*}[c] := [\partial c] \in H_{p-1}(A)$。

良定义：$\partial\partial c = 0$，故 $\partial c$ 是 $A$ 中的闭链；若 $c^{\prime} - c = \partial d + a$（$d \in S_{p+1}(X)$、$a \in S_{p}(A)$），则 $\partial c^{\prime} - \partial c = \partial a$ 是 $A$ 中的边缘，同调类不变。

**正合性。** 记 $j_{*} : H_{p}(A) \to H_{p}(X)$、$q_{*} : H_{p}(X) \to H_{p}(X, A)$ 为诱导映射。

> 续见 notes/thm.long-exact-pair.2.md
