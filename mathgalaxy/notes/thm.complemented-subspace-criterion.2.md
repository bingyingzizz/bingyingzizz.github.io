# 可补子空间的判别　`thm.complemented-subspace-criterion`　·　说明
根 `../`

**为什么完备性不能省。** 第二部分只用「$X \times Y$ 完备 + 有界逆定理」；去掉 $E$ 的完备性，即使 $X, Y$ 闭也不能保证投影有界（反例需要构造不完备的赋范空间，本图不展开）。

⭐ **可补性的等价刻画**：$X$ 可补 $\iff$ 存在有界投影 $P \in B(E)$ 使 $P(E) = X$；在 Banach 空间中，这又等价于「存在闭子空间 $Y$ 使 $X \oplus Y = E$ 是拓扑直和」。

📌 **两个例子。** Hilbert 空间闭子空间总可补（正交投影）；$c_0(\mathbb{N})$ 在 $\ell^{\infty}(\mathbb{N})$ 中闭但不可补（Phillips 1940，外部定理）。
